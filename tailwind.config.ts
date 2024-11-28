import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
	screens:{
		sm:"425px",
		md:"768px",
		lg:"1024px",
		xl:"1280px",
	},
  	extend: {
		screens:{
			'375':'375px',
			'2xl': '1440px',
			'4k':'1600px',
			'ssm':'320px',
			 
		},
  		colors: {
				
  		},
  		
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
