import { use, useState } from "react"
import type { CountryType } from "../../type"
import Country from "../Country/Country";
import './Countries.css'

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({ countriesPromise }: CountriesProps) {  //receiving countriesPromise from App.tsx 
    const countries =use(countriesPromise);
    // console.log(countries);  //just loaded countries data  into the inspect-console


    //c29-6
    const [visitedCountries,setVisitedCountry] =useState <CountryType[]>([]);

    const handleVisitedCountry = (country:CountryType):void=>{
            
        //c29-8
            const exists = visitedCountries.find(c =>c.ccn3.ccn3 === country.ccn3.ccn3);
            if(exists){
                const remainingCountries = visitedCountries.filter(c=>c.ccn3.ccn3 !== country.ccn3.ccn3);
                setVisitedCountry(remainingCountries);

            }else{
                const newVisitedCountry =[...visitedCountries, country];
                setVisitedCountry(newVisitedCountry);
            }
    }


    //29-7
    const [visitedflags, setVisitedFlags] =useState <string[]> ([]);

    const handleVisitedFlags =(flag:string):void =>{

        if(visitedflags.includes(flag)){
            const remainingFlags = visitedflags.filter((f)=>f!==flag);
            setVisitedFlags(remainingFlags);
        }else{
            const newVisitedFlags =[...visitedflags,flag]
            setVisitedFlags(newVisitedFlags);
        }
    }


    return (                //showing the loaded countries data to the screen
        <div >
            <h2>No of Countries:{countries.length} </h2>  
            <h4>No of Visited Countries:{visitedCountries.length}</h4>

            {/* c29-8 */}
            <div>
               <ul>
                {
                    visitedCountries.map(country => <li >{country.name.common} </li>)
                }
               </ul>
            </div>
           
            <h4>No of Visited Flags:{visitedflags.length}</h4>

            <div className="visited-flags">
                {
                    visitedflags.map(flag=> <img  src={flag} alt="Visited Flag"/>)
                }
            </div>

        <div className="countries">           {/*sending every single country data to Country.tsx  */}
                   
              {
                countries.map(country=> <Country 
                    key={country.ccn3.ccn3} 
                    country={country}
                    handleVisitedCountry ={handleVisitedCountry}
                    handleVisitedFlags ={handleVisitedFlags}


                    ></Country>)  
              }
        </div>
        
        </div>
    )
}