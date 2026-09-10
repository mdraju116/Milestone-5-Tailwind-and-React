import { useState } from "react"
import type { CountryType } from "../../type"
import './Country.css'

export interface CountryProps {
    country: CountryType,
    handleVisitedCountry:(country:CountryType)=>void,
    handleVisitedFlags:(flags:string)=>void

}

export default function Country({ country,handleVisitedCountry,handleVisitedFlags }: CountryProps) {     //receiving single country data from Countries.tsx
    
    //c29-5
    const [visited,setVisited]=useState<boolean>(false)

    const handleVisited =()=>{
        // setVisited(true)
        
        //creating toggle (i.e select-unselect option)
            // if(visited==true){
            //     setVisited(false)
            // }else{
            //     setVisited(true)
            // }

        //shorthand
        setVisited(!visited);

        handleVisitedCountry(country); //c29-6
    }


    return (                                // showing every single country info
        <div className={`country ${visited? "country-visited" : ''}`}>
            <h3>{country.name.common}</h3> 
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Capital: {country.capital.capital}</h4>
            <h4 >Population: {country.population.population}</h4>
            <button onClick={handleVisited}> {visited ? "Visited": "Mark as Visited"}</button>
            <button onClick ={ ()=>handleVisitedFlags(country.flags.flags.png)} > Add Flag as Visited </button>

        </div>
    )
}