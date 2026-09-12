
/* 
✅✅Create the project and install tailwind css and Daisy ui



##################### Tailwind CSS ############################

=>We can use Tailwind in 2 way:

✅✅1.Use tailwind by Play-CDN

    -go to: https://tailwindcss.com/docs/installation/play-cdn
    -copy this :  
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4">
        </script>
    -paste inside <head> .... </head> tag

    -Install (tailwind css intellicence) extension to get suggestion 
    -(NB:To use the extension must [@import "tailwindcss"] at a extra css       file )-see the extension documentation
    
    -ready to use

✅✅2.Installing the tailwind -using vite

   -go to : https://tailwindcss.com/docs/installation/using-vite

   =>1.copy this :  npm install tailwindcss @tailwindcss/vite
   -paste to : vscode project terminal


   =>2.again copy : import { defineConfig } from 'vite' 
           and : tailwindcss(),
   -paste to the file named:vite.config.ts (After pasting It will be like                                              this)

     import tailwindcss from '@tailwindcss/vite'
     import react from '@vitejs/plugin-react'
     import { defineConfig } from 'vite'
     export default defineConfig({
 	  plugins: [react(),tailwindcss()],
      })

   =>3.again copy: @import "tailwindcss";
   -paste to the file : index.css

   -ready to use



   
################### Daisy Ui #######################

✅✅Install : 
 	-go to : https://daisyui.com/docs/install/
        -copy : npm i -D daisyui@latest
	-paste to vscode project folder's terminal
        
	-again copy : @plugin "daisyui";
	-paste to the file : index.css

	-ready to use

✅✅Use a readymade component:
        -go to : https://daisyui.com/components/
	-choose any component (button/...)
	-choose the design and copy the jsx code
	-paste anywhere you need

	-okay







*/