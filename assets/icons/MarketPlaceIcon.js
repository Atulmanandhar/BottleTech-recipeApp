import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MarketPlaceIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22.074}
      height={22.074}
      viewBox="0 0 22.074 22.074"
      {...props}
    >
      <Path
        data-name="Path 2"
        d="M22.074 10.143V6.961l-2.587-3.88V0h-16.9v3.081L0 6.961v3.182l1.293.647v9.991H0v1.293h22.074v-1.293h-1.293V10.79zm-3.234.171l-1.94-.97V7.8h3.88v1.54zm-17.547-.97V7.8h3.88v1.54l-1.94.97zM16.72 6.51l-.862-2.587h2.637l1.724 2.587zm-2.226-2.587l.862 2.587h-3.672V3.923zM10.39 6.51H6.718l.862-2.587h2.81zm-5.036 0h-3.5L3.58 3.923h2.637zM6.467 7.8h3.923v1.541l-1.981.974-1.942-.971zm5.217 0h3.923v1.54l-1.942.971-1.981-.974zm-7.8-6.51h14.31v1.34H3.88zm7.8 16.857h-6.51v-3.88h6.51zm5.217 0h-1.294v1.293H16.9v1.337h-3.923v-6.51H16.9zm2.587 2.63h-1.294v-7.8H3.88v6.467h7.8v1.337h-9.1v-9.344l.647.323 2.593-1.293 2.58 1.292 2.632-1.295 2.632 1.295 2.584-1.292 2.587 1.293.647-.323z"
        fill={props.color}
      />
    </Svg>
  )
}

export default MarketPlaceIcon
