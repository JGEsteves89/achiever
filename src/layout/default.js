import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material';

import AchievementsPage from '../pages/achievements.js';
import './default.css';

function DefaultLayout() {
	const theme = useTheme();

	return (
		<Box className="app-body" sx={gradientBackground(theme)}>
			<CssBaseline />
			<AppBar sx={{ backgroundColor: 'background.default' }} position="static">
				<Toolbar>
					<IconButton size="large" edge="start" aria-label="menu" sx={{ mr: 2, color: 'primary.light' }}>
						<MenuIcon />
					</IconButton>
					<Box
						component="img"
						sx={{
							maxHeight: '64px',
							minxWidth: '100px',
							flexGrow: 1,
						}}
						alt="Achiever logo"
						src={process.env.PUBLIC_URL + '/logoAchiever.svg'}
					/>
					{/* <Box sx={{ flexGrow: 1, border: '2px solid black' }}>
						<img sx={{ border: '2px solid black' }} alt="Achiever logo" src={process.env.PUBLIC_URL + '/logoAchiever.svg'} />
					</Box> */}

					<IconButton size="large" edge="start" aria-label="menu" sx={{ ml: 2, color: 'primary.light' }}>
						<MoreVertIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<AchievementsPage />
		</Box>
	);
}

const gradientBackground = (theme) => {
	console.log();
	return {
		background: `linear-gradient(0deg, rgba(0,0,0,1) -150%, ${alpha(theme.palette.background.default, 1)} 100%)`,
	};
};
export default DefaultLayout;
