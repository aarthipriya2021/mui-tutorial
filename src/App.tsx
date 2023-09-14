import './App.css';
import MuiButtons from './components/03_MuiButtons';
import MuiTextField from './components/02_MuiTextField';
import MuiTypography from './components/01_MuiTypography';
import MuiSelect from './components/04_MuiSelect';
import MuiRadioButton from './components/05_MuiRadioButton';
import MuiCheckBox from './components/06_MuiCheckBox';
import MuiSwitch from './components/07_MuiSwitch';
import MuiRating from './components/08_MuiRating';
import MuiAutocomplete from './components/09_MuiAutocomplete';
import MuiBox from './components/10_MuiBox';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButtons />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckBox />
      <MuiSwitch />
      <MuiRating />
      <MuiAutocomplete />
      <MuiBox />
    </div>
  );
}

export default App;
