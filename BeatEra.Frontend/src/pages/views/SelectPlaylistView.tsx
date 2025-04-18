import { useEffect, useState } from "react"
import { ListView, ListItemWithMarker } from "../../components/ListView"
import useSpaceStore from "../../state/SpaceState"

const SelectPlaylistsView = () => {

  const [playLists, setPlaylists] = useState<ListItemWithMarker[]>(
    [
      { id: "1", title: "Top Hits", marked: false },
      { id: "2", title: "Chill Vibes", marked: false },
      { id: "3", title: "Workout Mix", marked: false },
      { id: "4", title: "Party Anthems", marked: false },
      { id: "5", title: "Throwback Classics", marked: false },
    ]
  )

  const { currentSpace, updateSpace } = useSpaceStore()

  useEffect(() => {
    if (currentSpace) {
      const updatedPlaylists = playLists.map((item) => {
        return { ...item, marked: currentSpace.playlists.includes(item.id) }
      })
      setPlaylists(updatedPlaylists)
    }
  }, [currentSpace])

  const onPlaylistMarked = (id: string, marked: boolean) => {
    if (!currentSpace) return

    const updatedPlaylists = playLists.map((item) => {
      if (item.id === id) {
        return { ...item, marked: marked }
      }
      return item
    })
    setPlaylists(updatedPlaylists)
    updateSpace({
      ...currentSpace,
      playlists: updatedPlaylists.filter((item) => item.marked).map((item) => item.id)
    })
  }

  return (
    <div>
      <h2>Select Playlists</h2>

      <ListView list={playLists} onItemMarked={onPlaylistMarked} />
    </div>
  )
}

export default SelectPlaylistsView
