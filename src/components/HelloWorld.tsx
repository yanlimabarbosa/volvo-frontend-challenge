import React from "react"
import { Block } from "vcc-ui"
import { useCars } from "../hooks/useCars"
import { CarCard } from "./CarCard"

export const HelloWorld: React.FC = () => {
  const { cars } = useCars()
  return (
    <>
      <Block extend={{ padding: 20 }}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Block>
    </>
  )
}
