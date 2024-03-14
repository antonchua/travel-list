type TravelStatsProps = {
  listItemLength: number
}
export const TravelStats = ({listItemLength}: TravelStatsProps) => {
  return(
    <div>
      You have {listItemLength} on your list
    </div>
  )
}