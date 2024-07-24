/**
 * @file HomeModule.tsx
 * @description This component displays a filter . It fetches the processes based on the current type and displays them as clickable cards. If no items are found, it shows a "No Data Found" message.
 * @author Jazmin Rodriguez
 */

import React, { FC, useState, useRef, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { Formik, Form, Field, useFormikContext } from 'formik';
import * as Yup from 'yup';
import { useMediaQuery } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from '../../store';
import Loading from "../loading/loading";
import useToggle from '../../hooks/use-toogle';
import { DataForm } from '../../types/dignidad';

/**
 * FilterResult
 *
 * This component displays a jurisdiction filter.
 * It fetches the processes based on the current type and displays them as clickable cards.
 * If no items are found, it shows a "No Data Found" message.
 *
 * @returns {JSX.Element} The rendered component.
 */

interface Option {
  codigo: string | number;
  nombre: string;
}

interface CustomSelectFieldProps {
  name: string;
  label: string;
  options: Option[];
  action?: (value: string | number) => void;
  enabled?: boolean;
  clear?: (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => void;
}

const CustomSelectField: React.FC<CustomSelectFieldProps> = ({ name, label, options, action, enabled, clear }) => {
  const { values, handleChange, touched, errors, setFieldValue } = useFormikContext<any>();

  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string | number;
    handleChange(event);
    action?.(value);
    clear?.(setFieldValue);
  };

  return (
    <Field
      as={TextField}
      name={name}
      label={label}
      select
      fullWidth
      disabled={!enabled}
      onChange={handleSelectChange}
      value={values[name] || ""}
      helperText={touched[name] && errors[name]}
      error={touched[name] && Boolean(errors[name])}
    >
      {options.map((option) => (
        <MenuItem key={option.codigo} value={option.codigo}>
          {option.nombre}
        </MenuItem>
      ))}
    </Field>
  );
};


export const FilterResult: FC = (props) => {

    const isMd = useMediaQuery('(min-width: 960px)');
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const getProcess = useSelector((state: RootState) => state.process.process);
    const getDignidad = useSelector((state: RootState) => state.dignidad.dignidad);
    const [schema, setSchema] = useState<DataForm>();
    const sizesRef = useRef(6);
    const headersRef = useRef({
      codigoDignidad: getDignidad?.codigoDignidad,
      codigoProvincia: 0,
      codigoCircProvincia: 0,
      codigocircuCantonal: 0,
      codigoCanton: 0
  });

  const initialValues = {
    provincia: '',
    circunscripcion: '',
    pais: '',
    canton: '',
    circunscripcionCantonal: '',
    consulado: '',
    parroquia: '',
  };

  const isFieldEnabled = (field: string) => {
    const fieldConfig = schema?.enabled?.find(item => Object.keys(item)[0] === field);
    return fieldConfig ? Object.values(fieldConfig)[0] : false;
  };

  const clearDependentFields = (dependentFields: string[]) => (setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void) => {
    dependentFields.forEach((field) => {
      setFieldValue(field, "", false);
    });
  };

  const validationSchema = Yup.object().shape({
      provincia: isFieldEnabled('provincia')
          ? Yup.string().required('Provincia es requerida')
          : Yup.string(),
      circunscripcion: isFieldEnabled('circunscripcion')
          ? Yup.string().required('Circunscripción es requerida')
          : Yup.string(),
      canton: isFieldEnabled('canton')
          ? Yup.string().required('Cantón es requerido')
          : Yup.string(),
      circunscripcionCantonal: isFieldEnabled('circunscripcionCantonal')
          ? Yup.string().required('Circunscripción Cantonal es requerida')
          : Yup.string(),
      parroquia: isFieldEnabled('parroquia')
          ? Yup.string().required('Parroquia es requerida')
          : Yup.string()
  });

  const populateJurisdiccionForm = useCallback(async () => {
      setIsLoading();
      try {
    const response = await getDignidadJurisdiccionForm(headersRef.current);
          setSchema(response);
          sizesRef.current = response?.required?.length ? 12 / response.required.length : 6;
      } catch (error) {
          console.error("Error al cargar datos jurisdicción:", error);
      }
      setIsLoading();

  }, [setIsLoading]);

  useEffect(() => {
      populateJurisdiccionForm();
  }, [populateJurisdiccionForm]);

  const handleSubmit = () => {


      headersRef.current = {
        ...headersRef.current,
        numeroProceso: getDignidad.numeroProceso,
        codigoDignidad: getDignidad.codigoDignidad,
      };
  
  };

  const handleSelectChange = (key: string, action?: (value: any) => void) => async (value: any) => {
    setIsLoading();
    setShowPartidos(false);
    headersRef.current[key] = value;
    partidosElectoralesRef.current[key] = value;
    bodyRef.current[key] = value;
    await populateJurisdiccionForm();
    action && dispatch(action({ codigo: value }));
    setIsLoading();
  };

return(
  <>
            <Card
                sx={{
                    my: "2%",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    backgroundImage: 'url("/gradient-bg.svg")',
                }}
            >
                <CardHeader title={`${getProceso.tipoProceso} / ${getDignidad.nombreDignidad}`} />
                <Loading isLoading={isLoading} />
                <CardContent>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form>
                                <Grid container spacing={3}>
                                    {schema?.data?.provincia && (
                                        <Grid item md={sizesRef.current} xs={12}>
                                            <CustomSelectField
                                                name="provincia"
                                                label="Provincia"
                                                options={schema.data.provincia}
                                                action={handleSelectChange('codigoProvincia', provinciaItemAction)}
                                                enabled={isFieldEnabled("provincia")}
                                                clear={clearDependentFields(["circunscripcion", "canton", "circunscripcionCantonal", "parroquia"])}
                                            />
                                        </Grid>
                                    )}
                                    {schema?.data?.circunscripcion && (
                                        <Grid item md={sizesRef.current} xs={12}>
                                            <CustomSelectField
                                                name="circunscripcion"
                                                label="Circunscripción"
                                                options={schema.data.circunscripcion}
                                                action={handleSelectChange('codigoCircProvincia', circunscripcionItemAction)}
                                                enabled={isFieldEnabled('circunscripcion')}
                                                clear={clearDependentFields(["canton", "circunscripcionCantonal", "parroquia"])}
                                            />
                                        </Grid>
                                    )}
                                    {schema?.data?.cantones && (
                                        <Grid item md={sizesRef.current} xs={12}>
                                            <CustomSelectField
                                                name="canton"
                                                label="Cantón"
                                                options={schema.data.cantones}
                                                action={handleSelectChange('codigoCanton', cantonItemAction)}
                                                enabled={isFieldEnabled('canton')}
                                                clear={clearDependentFields(["circunscripcionCantonal", "parroquia"])}
                                            />
                                        </Grid>
                                    )}
                                    {schema?.data?.circunCantones && (
                                        <Grid item md={sizesRef.current} xs={12}>
                                            <CustomSelectField
                                                name="circunscripcionCantonal"
                                                label="Circunscripción"
                                                options={schema.data.circunCantones}
                                                action={handleSelectChange('codigocircuCantonal', cicunscripcionCantonalItemAction)}
                                                enabled={isFieldEnabled('circunscripcionCantonal')}
                                                clear={clearDependentFields(["parroquia"])}
                                            />
                                        </Grid>
                                    )}
                                    {schema?.data?.parroquias && (
                                        <Grid item md={sizesRef.current} xs={12}>
                                            <CustomSelectField
                                                name="parroquia"
                                                label="Parroquia"
                                                options={schema.data.parroquias}
                                                action={handleSelectChange('codigoParroquia', parroquiaItemAction)}
                                                enabled={isFieldEnabled('parroquia')}
                                                clear={clearDependentFields([])}
                                            />
                                        </Grid>
                                    )}
                                </Grid>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        justifyContent: "center",
                                        mx: -1,
                                        mt: 2,
                                        mb: 6,
                                        "& > a": {
                                            m: 1,
                                        },
                                    }}
                                >
                                    <Button type="submit" variant="contained">
                                        <SearchIcon fontSize="medium" padding="0%" />
                                        <Typography variant="h6">Buscar</Typography>
                                    </Button>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </CardContent>
            </Card>
                            )}