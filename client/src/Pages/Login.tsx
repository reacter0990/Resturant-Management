import { object, string } from 'yup';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid2'
import { Link as ReactLink } from "react-router-dom";
import Button from "@mui/material/Button";
//import { useDispatch } from "react-redux";
import { Box, Typography, TextField } from "@mui/material";
//import GetNeededUserByEmailAndPassword from "../../../Hooks/useLoginHooks";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function Copyright(props: object) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Hellington LLC © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const defaultTheme = createTheme();


const Login = () => {
 
  const validationSchema = object({
    email: string()
      .email('Неверный формат email')
      .required('Email обязателен'),
    password: string()
      .min(8, 'Пароль должен быть не менее 8 символов')
      .required('Пароль обязателен'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          size={{ xs: false, sm: 4, md: 7, lg: 6, xl: 6 }}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid size={{ xs: false, sm: 4, md: 7, lg: 6, xl: 6 }} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Daxil Ol
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={formik.handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                name="email"
                label="Email Ünvan"
                autoComplete="email"
                autoFocus
                required
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                margin="normal"
                fullWidth
                id="password"
                name="password"
                label="Şifrə"
                type="password"
                autoComplete="current-password"
                required
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Daxil Ol
              </Button>
              <Grid container>
                <Grid size={6}>
                  {/* <ReactLink to="/forgot-password"> */}
                    <Link variant="body2">
                      Şifrəni unutmusuz?
                    </Link>
                  {/* </ReactLink> */}
                </Grid>
                <Grid size={6}>
                  {/* <ReactLink to="/registration"> */}
                    <Link variant="body2">
                      {"Şirkət hesabınız mövcut deyil?"}
                    </Link>
                  {/* </ReactLink> */}
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  )
}

export default Login