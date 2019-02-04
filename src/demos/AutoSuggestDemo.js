import React, { Component } from "react";
import AutoSuggest from "../components/AutoSuggest";
// import ControlSearch from ".functionalComponent/components/ControlSearch";

const data = [
    { label: "Açaí", key: "0" },
    { label: "Apple", key: "1" },
    { label: "Akee", key: "2" },
    { label: "Apricot", key: "3" },
    { label: "Avocado", key: "4" },
    { label: "Banana", key: "5" },
    { label: "Bilberry", key: "6" },
    { label: "Blackberry", key: "7" },
    { label: "Blackcurrant", key: "8" },
    { label: "Black sapote", key: "9" },
    { label: "Blueberry", key: "10" },
    { label: "Boysenberry", key: "11" },
    { label: "Buddha's hand (fingered citron)", key: "12" },
    { label: "Crab apples", key: "13" },
    { label: "Currant", key: "14" },
    { label: "Cherry", key: "15" },
    { label: "Cherimoya (Custard Apple)", key: "16" },
    { label: "Chico fruit", key: "17" },
    { label: "Cloudberry", key: "18" },
    { label: "Coconut", key: "19" },
    { label: "Cranberry", key: "20" },
    { label: "Cucumber", key: "21" },
    { label: "Damson", key: "22" },
    { label: "Date", key: "23" },
    { label: "Dragonfruit (or Pitaya)", key: "24" },
    { label: "Durian", key: "25" },
    { label: "Elderberry", key: "26" },
    { label: "Feijoa", key: "27" },
    { label: "Fig", key: "28" },
    { label: "Goji berry", key: "29" },
    { label: "Gooseberry", key: "30" },
    { label: "Grape", key: "31" },
    { label: "Raisin", key: "32" },
    { label: "Grapefruit", key: "33" },
    { label: "Guava", key: "34" },
    { label: "Honeyberry", key: "35" },
    { label: "Huckleberry", key: "36" },
    { label: "Jabuticaba", key: "37" },
    { label: "Jackfruit", key: "38" },
    { label: "Jambul", key: "39" },
    { label: "Japanese plum", key: "40" },
    { label: "Jostaberry", key: "41" },
    { label: "Jujube", key: "32" },
    { label: "Juniper berry", key: "43" },
    { label: "Kiwano (horned melon)", key: "44" },
    { label: "Kiwifruit", key: "45" },
    { label: "Kumquat", key: "46" },
    { label: "Lemon", key: "47" },
    { label: "Lime", key: "48" },
    { label: "Loquat", key: "49" },
    { label: "Longan", key: "50" },
    { label: "Lychee", key: "51" },
    { label: "Mango", key: "52" },
    { label: "Mangosteen", key: "53" },
    { label: "Marionberry", key: "54" },
    { label: "Melon", key: "55" },
    { label: "Cantaloupe", key: "56" },
    { label: "Honeydew", key: "57" },
    { label: "Watermelon", key: "58" },
    { label: "Miracle fruit", key: "59" },
    { label: "Mulberry", key: "60" },
    { label: "Nectarine", key: "61" },
    { label: "ance", key: "63" },
    { label: "Olive", key: "64" },
    { label: "Orange", key: "65" },
    { label: "Blood orange", key: "66" },
    { label: "Clementine", key: "67" },
    { label: "Mandarine", key: "68" },
    { label: "Tangerine", key: "69" },
    { label: "Papaya", key: "70" },
    { label: "Passionfruit", key: "71" },
    { label: "Peach", key: "72" },
    { label: "Pear", key: "73" },
    { label: "Persimmon", key: "74" },
    { label: "Plantain", key: "75" },
    { label: "Plum", key: "76" },
    { label: "Prune (dried plum)", key: "77" },
    { label: "Pineapple", key: "78" },
    { label: "Pineberry", key: "79" },
    { label: "Plumcot (or Pluot)", key: "80" },
    { label: "Pomegranate", key: "81" },
    { label: "Pomelo", key: "82" },
    { label: "Purple mangosteen", key: "83" },
    { label: "Quince", key: "84" },
    { label: "Raspberry", key: "85" },
    { label: "Salmonberry", key: "86" },
    { label: "Rambutan (or Mamin Chino)", key: "87" },
    { label: "Redcurrant", key: "88" },
    { label: "Salal berry", key: "89" },
    { label: "Salak", key: "90" },
    { label: "Satsuma", key: "91" },
    { label: "Soursop", key: "92" },
    { label: "Star apple", key: "93" },
    { label: "Star fruit", key: "94" },
    { label: "Strawberry", key: "95" },
    { label: "Surinam cherry", key: "96" },
    { label: "Tamarillo", key: "97" },
    { label: "Tamarind", key: "98" },
    { label: "Ugli fruit", key: "99" },
    { label: "White currant", key: "100" },
    { label: "White sapote", key: "101" },
    { label: "Yuzu", key: "102" },
    { label: "Bell pepper", key: "103" },
    { label: "Chili pepper", key: "104" },
    { label: "Corn kernel", key: "105" },
    { label: "Cucumber", key: "106" },
    { label: "Eggplant", key: "107" },
    { label: "Olive", key: "108" },
    { label: "Pea", key: "109" },
    { label: "Pumpkin", key: "110" },
    { label: "Squash", key: "111" },
    { label: "Tomato", key: "112" },
    { label: "Zucchini", key: "113" }
];

export default class AutoSuggestDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        };
    }
    handleSelect = selected => {
        console.log(selected);
        this.setState({ selected });
    };
    render() {
        return (
            <AutoSuggest
                options={data}
                keyName="label"
                selected={this.state.selected}
                onSelect={this.handleSelect}
            />
        );
    }
}
