/* 

📌📌Purpose : To show the no of visited flags and check existing data

✅✅Coding Sequence:

➡️1.Create a handler(handleVisitedFlags) using useState -inside ⭐Countries.tsx 

    const [visitedflags, setVisitedFlags] =useState <string[]> ([]);

        const handleVisitedFlags =(flag:string):void =>{
            const newVisitedFlags =[...visitedflags,flag]
            setVisitedFlags(newVisitedFlags);
            
        }


➡️2.Send the handler to child(Country.tsx) -from ⭐Countries.tsx

        <div className="countries">           //sending every single country data to Country.tsx  
                   
              {
                countries.map(country=> <Country 
                    key={country.ccn3.ccn3} 
                    country={country}
                    handleVisitedCountry ={handleVisitedCountry}
                    handleVisitedFlags ={handleVisitedFlags}


                    ></Country>)  
              }
        </div>


➡️3.Receive the handler as a props -⭐Country.tsx

export default function Country({ country,handleVisitedCountry,handleVisitedFlags }: CountryProps) { 

        .
        .
        .
    }

➡️4.Show the no of visited Countries Flags using a h4 -inside ⭐Countries.tsx 

    <h4>No of Visited Flags:{visitedflags.length}</h4>
    

➡️5.Create a button and call onClick() for handleVisitedFlag  -⭐Country.tsx

    <button onClick ={ ()=>handleVisitedFlags(country.flags.flags.png)} > Add Flag as Visited </button>


➡️6.Create a if-else condition inside the handleVisitedFlag to check existing data -⭐Countries.tsx 

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


*/