import { ICardPoint } from "./ICardPoint"

function CardPoint({ item }: { item: ICardPoint }) {
  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-1 font-roboto">{item.title}</h3>
      <p className="text-lg text-[#07111D]">{item.desc}</p>
    </div>
  )
}

export default CardPoint
