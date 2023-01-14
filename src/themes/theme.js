import { createTheme } from '@mui/material/styles';
const defaultTheme = createTheme({
	palette: {
		type: 'dark',
		primary: {
			main: '#3f51b5',
			light: '#97c9ce',
			dark: '#28666d',
		},
		secondary: {
			main: '#f50057',
		},
		background: {
			default: '#22416c',
			paper: '#2c548c',
		},
		text: {
			primary: '#ddebe7',
			secondary: '#74b9c2',
			disabled: '#adcacb',
			hint: 'rgba(116,185,194,0.53)',
		},
	},
});
export default defaultTheme;
