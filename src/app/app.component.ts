import { Component } from "@angular/core";
import Plugin from "@revolist/revogrid-column-date";
import NumberColumnType from "@revolist/revogrid-column-numeral";
import SelectTypePlugin from "@revolist/revogrid-column-select";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  range = true;

  dropdown = {
    labelKey: "label",
    valueKey: "value",
    source: [
      { label: "According", value: "a" },
      { label: "Over", value: "b" },
      { label: "Source", value: "s" }
    ]
  };

  columns = [
    {
      name: "Birth",
      prop: "birthdate",
      columnType: "date",
      size: 150
    },
    {
      prop: "name",
      name: "First",
      sortable: true,
      columnType: "numeric",
      order: "dsc"
    },
    {
      prop: "details",
      name: "Second"
    },
    {
      ...this.dropdown,
      prop: "selection",
      name: "Selection",
      columnType: "select" // column type specified as 'select'
    }
  ];
  rows = [
    {
      birthdate: "2022-08-24",
      name: "1",
      details: "Item 1",
      selection: "According"
    },
    {
      birthdate: "2022-08-24",
      name: "2",
      details: "Item 2",
      selection: "Over"
    }
  ];
  columnTypes = {
    date: new Plugin(),
    numeric: new NumberColumnType("0,0"),
    select: new SelectTypePlugin()
  };
}
