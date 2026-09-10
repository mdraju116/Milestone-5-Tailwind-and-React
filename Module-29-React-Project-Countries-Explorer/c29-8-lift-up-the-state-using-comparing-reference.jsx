/* 
📌📌Purpose : To check the existing data using an unique key - find and filter 

NB:
1.Using Array.includes and then filter (c29-7) is a bad way to check exiting data
    -it is used for primitive data only
2.Using an unique key and then filter (c29-8) is a good way to check existing data
    -it is used for non-primitive data

✅✅Coding Sequence:

➡️1.Show the visited flags as an image using a div -⭐Countries.tsx 

            <h4>No of Visited Flags:{visitedflags.length}</h4>
            <div className="visited-flags">
                {
                    visitedflags.map((flag,index)=> <img  key={index} src={flag} alt="Visited Flag"/>)
                }
            </div>

➡️2.Show the visited countries as an list using a div -⭐Countries.tsx 

        <h4>No of Visited Countries:{visitedCountries.length}</h4>     
        <div>
            <ul>
            {
                visitedCountries.map(country => <li key={country.ccn3.ccn3}>{country.name.common} </li>)
            }
            </ul>
        </div>


➡️3.Create a if-else using the unique key inside the handleVisitedCountry -⭐Countries.tsx 

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




*/