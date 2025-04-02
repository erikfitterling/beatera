/** @format */

import ListView from "../../components/ListView"

const SelectPlaylistsView = () => {
  const itemsList = [
    { id: "1", title: "Erstes Element", marked: false },
    { id: "2", title: "Zweites Element", marked: false },
    { id: "3", title: "Drittes Element", marked: false },
    { id: "4", title: "Viertes Element", marked: false },
  ]

  const handleItemSelect = (
    selectedItems: { id: string; title: string; marked: boolean }[]
  ) => {
    console.log("Selected items:", selectedItems)
  }

  return (
    <div>
      <h2>Select Playlists</h2>

      <ListView list={itemsList} onItemSelect={handleItemSelect} />
    </div>
  )
}

export default SelectPlaylistsView
