type TravelStatsProps = {
  listItemLength: number
  alreadyPacked: number
  percentage: number
}
export const TravelStats = ({listItemLength, alreadyPacked, percentage}: TravelStatsProps) => {
  return(
    <div>
      You have {listItemLength} on your list, and u already packed {alreadyPacked} ({percentage}%)
    </div>
  )
}