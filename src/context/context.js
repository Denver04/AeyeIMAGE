import React, { useState, useContext } from 'react'
// import { useCallback } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    //   const fetchDrinks = useCallback( async () => {
    //     setLoading(true)
    //     try {
    //       const response = await fetch(`${url}${searchTerm}`)
    //       const data = await response.json()
    //       console.log(data);
    //       const { drinks } = data
    //       if (drinks) {
    //         const newCocktails = drinks.map((item) => {
    //           const {
    //             idDrink,
    //             strDrink,
    //             strDrinkThumb,
    //             strAlcoholic,
    //             strGlass,
    //           } = item

    //           return {
    //             id: idDrink,
    //             name: strDrink,
    //             image: strDrinkThumb,
    //             info: strAlcoholic,
    //             glass: strGlass,
    //           }
    //         })
    //         setCocktails(newCocktails)
    //       } else {
    //         setCocktails([])
    //       }
    //       setLoading(false)
    //     } catch (error) {
    //       console.log(error)
    //       setLoading(false)
    //     }
    //   },[searchTerm])
    //   useEffect(() => {
    //     fetchDrinks()
    //   }, [searchTerm,fetchDrinks])

    const Changing = (args) => {
        // const page = sublinks.find((link) => link.page === text);
        console.log('args',args);
        console.log('data type ->',typeof(data));
        setData(args);

        console.log('hie',data);

    };

    return (
        <AppContext.Provider
            value={
                {
                    loading,
                    data,
                    Changing,
                }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }