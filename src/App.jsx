import { useEffect, useState } from "react";
import { bangladeshDistricts, countries, states } from "./Coponents/Data/Data";

function App() {
  // const [allStateData, setAllStateData] = useState([]);
  // const [city,setCity] = useState('')

  const TopCountries = countries;
  const allStateData = states;

  const allDistrict = bangladeshDistricts;

  const [info, SetInfo] = useState({
    country: "",
    state: "",
    district: "",
  });

  useEffect(() => {
    SetInfo({...info, state: "", district: ""})     
  }, [info.country]);

  useEffect(() => {
    SetInfo({...info, district: ""})     
  }, [info.state]);

  console.log(info);
  return (
    <div>
      <div className="flex gap-4 ps-4 py-4">
        <div>
          <select
            onChange={(e) => SetInfo({ ...info, country: e.target.value })}
            className="border border-red-400 px-4 py-2 rounded"
            name=""
            id=""
            value={info.country}
          >
            <option value="" selected>
              Please Select Your Country
            </option>
            {TopCountries.map((country) => (
              <option key={country.id} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            disabled={info.country === "" ? true : false}
            onChange={(e) => SetInfo({ ...info, state: e.target.value })}
            className="border border-green-500 px-4 py-2 rounded"
            name=""
            id=""
            value={info.state}
          >
            <option value=""  selected>
              Please Select Your State
            </option>
            {allStateData.map((state) => (
              <option key={state.id} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            disabled={info.state === "" ? true : false}
            onChange={(e) => SetInfo({ ...info, district: e.target.value })}
            className="border border-blue-500 px-4 py-2 rounded"
            name=""
            id=""
            value={info.district}
          >
            <option selected value={''}>Select Your District</option>
            {allDistrict.map((district) => (
              <option key={district.id} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
