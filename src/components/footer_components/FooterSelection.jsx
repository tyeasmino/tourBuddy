import React, { useState } from "react";
import Select from "react-select";
import tourBuddy from '../../assets/tourbuddy.png'
import footer_american_flag from "../../assets/footer_american.png";
import footer_bangladesh_flag from "../../assets/footer_bangladesh.png";
import footer_indian_flag from "../../assets/footer_india.png";
import { FaDollarSign } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaBitcoinSign } from "react-icons/fa6";

const languages = [
  { value: "english", label: "English (UK)", icon: footer_american_flag },
  { value: "bangla", label: "Bangla", icon: footer_bangladesh_flag },
  { value: "hindi", label: "Hindi", icon: footer_indian_flag },
];

const customSingleValue = ({ data }) => (
    <div className="flex items-center gap-2">
      <img src={data.icon} alt="" className="w-5 h-5" />
      {data.label}
    </div>
  );

const currency = [
  { value: "dolar", label: "U.S. Dollar", icon: <FaDollarSign /> },
  { value: "taka", label: "BDT Taka", icon: <TbCurrencyTaka />},
  { value: "bit coin", label: "Bitcoin", icon: <FaBitcoinSign /> },
];

const customCurrencySingleValue = ({ data }) => (
    <div className="flex items-center gap-2">
      {data.label}
      {data.icon} 
    </div>
  );
  


const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent", 
    border: "1px solid gray", 
    boxShadow: "none",
    "&:hover": {
      border: "1px solid #ccc",
    },
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "transparent", 
    borderRadius: "5px",
    backdropFilter: "blur(8px)",  
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor:   "transparent",  
    color: "#fff",
    display: "flex",
    alignItems: "center",
    padding: "10px",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff", 
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff",  
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#fff",  
  }),
  indicatorSeparator: () => ({
    display: "none",  
  }),
};

const FooterSelection = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedCurrency, setSelectedCurrency] = useState(currency[0]);

  return (
    <div>
      <img src={tourBuddy} alt="" /> 

      <section className="p-5">
        <Select
          options={languages}
          value={selectedLanguage}
          onChange={setSelectedLanguage}
          getOptionLabel={(e) => (
            <div className="flex items-center gap-2">
              <img src={e.icon} alt="" className="w-5 h-5" />
              {e.label}
            </div>
          )} 
          components={{ SingleValue: customSingleValue }}
          styles={customStyles} 
          className="w-48 text-white" 
        />
      </section>

      <section className="p-5">
        <Select
          options={currency}
          value={selectedCurrency}
          onChange={setSelectedCurrency}
          getOptionLabel={(e) => (
            <div className="flex items-center gap-2">
              {e.label} {e.icon}
            </div>
          )} 
          components={{ SingleValue: customCurrencySingleValue }} 
          styles={customStyles} 
          className="w-48 text-white" 
        />
      </section>
    </div>
  );
};

export default FooterSelection;
