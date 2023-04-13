import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem("itemName", JSON.stringify(initialValue));
          parsedItem = [];
          console.log("estoy true");
        } else {
          parsedItem = JSON.parse(localStorageItem);
          console.log("estoy else");
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
  }, [...initialValue, itemName]);
  // console.log(...[1,3,2], itemName);
  // console.log([1,3,2], itemName);

  

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
