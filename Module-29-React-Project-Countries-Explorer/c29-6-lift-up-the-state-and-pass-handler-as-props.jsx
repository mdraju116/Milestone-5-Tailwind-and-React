
/* 
✅✅Coding Sequence:


➡️1.Create a handler(handleVisitedCountry) using useState -inside ⭐Countries.tsx 
        const [visitedCountries,setVisitedCountry] =useState <CountryType[]>([])

        const handleVisitedCountry = (country:CountryType):void=>{
                const newVisitedCountry =[...visitedCountries, country];
                setVisitedCountry(newVisitedCountry);
        }

➡️2.Send the handler to child(Country.tsx) -from ⭐Countries.tsx 

        <div className="countries">           //sending every single country data to Country.tsx  
                   
              {
                countries.map(country=> <Country 
                    key={country.ccn3.ccn3} 
                    country={country}
                    handleVisitedCountry ={handleVisitedCountry}
                    
                    ></Country>)  
              }
        </div>

➡️3.Show the no of visited country using a h4 -inside ⭐Countries.tsx 

    <h4>No of Visited Countries:{visitedCountries.length}</h4>


➡️4.Receive the handles as a props and call it inside handleVisited -⭐Country.tsx
       

    export default function Country({ country,handleVisitedCountry }: CountryProps) {    
        //c29-5
        const [visited,setVisited]=useState<boolean>(false)

        const handleVisited =()=>{
        
            //shorthand
            setVisited(!visited);
            
            handleVisitedCountry(country)
        }


*/