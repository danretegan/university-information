import { useEffect, useState } from "react";
import AddCitiesForm from "./AddCitiesForm";
import citiesService from "../../../common/services/citiesService";
import Icon from "../../../common/components/icon/Icon";
import Button from "../../../common/components/button/Button";
import ErrorAlert from "../../../common/components/errorAlert/ErrorAlert";

const CITIES_KEY = "cities";

const Cities = () => {
  const [isAddFormVisible, setIsAddFormVisible] = useState(false);
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const renderList = (list) => {
    if (!list || list.length === 0) {
      return <div>There are no cities added</div>;
    }

    return list.map((item) => (
      <div key={item.id}>
        <span>{item.name}</span>
      </div>
    ));
  };

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const response = await citiesService.getCities();
        setList(response);
        return response;
      } catch (error) {
        console.error(error);
        setError("A aparut o eroare la obtinerea listei de orase");
      } finally {
        setIsLoading(false);
      }
    }

    getCities();
  }, []);

  useEffect(() => {
    localStorage.setItem(CITIES_KEY, JSON.stringify(list));
  }, [list]);

  const handleAddItem = (item) => {
    const sortedList = list.sort((a, b) => a.id > b.id);

    if (sortedList.find((el) => el.name === item.name)) {
      setError("Un oras cu denumirea asta exista deja!");
      return;
    }

    const newId = sortedList.length > 0 ? sortedList.length + 1 : 0;

    const itemToAdd = {
      id: newId,
      name: item.name,
    };

    setList((prevState) => {
      return [...prevState, itemToAdd];
    });

    setIsAddFormVisible(false);
  };

  return (
    <div>
      <h2>
        <Icon variant="pin" label="cities" />
        <span>Cities</span>
      </h2>
      {isLoading ? <div>Loading...</div> : <div>{renderList(list)}</div>}

      {isAddFormVisible && <AddCitiesForm onFormSubmit={handleAddItem} />}

      {error.length > 0 && <ErrorAlert errors={error} />}
      <Button
        action={() => {
          setIsAddFormVisible(true);
        }}
      >
        Add City
      </Button>
    </div>
  );
};

export default Cities;