import React from "react"
import theme from "styled-theming"
import styled from "styled-components"
import { Link } from "gatsby"

const fill = theme("mode", {
  light: "#333333",
  dark: "#FFFFF0",
})

const Svg = styled.svg`
  fill: ${fill};
  stroke: ${fill};
  stroke-width: 6;
  height: 64px;
  // width: 15vw;
  // max-width: 120px;
`

const Logo = () => (
  <Link to="/">
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 1920 595.9"
    >
      <g>
        <g>
          <path
            className="st0"
            d="M407.3,97.2c4.8-22.8-6-38.3-33.6-43.1c-30.6-5.4-92.9,5.4-151.6,33c-50.3,24-103.1,60.5-112.6,101.9
			c-9,41.3,11.4,73.7,70.7,128.8c17.4,16.2,32.4,30.6,44.9,43.7c65.3-26.4,190.5-61.7,204.9-64.7c15.6-3.6,18.6,3.6,2.4,6.6
			c-13.8,3-132.4,37.1-199.5,65.9c46.1,48.5,61.7,79.7,55.7,118c-7.2,47.9-66.5,74.9-128.2,68.9c-59.3-5.4-86.9-40.1-81.5-71.9
			c7.8-41.9,61.7-80.3,120.4-110.8c3.6-2.4,9-4.2,13.8-6.6c-11.4-12-25.8-25.8-41.3-41.3c-65.9-62.3-88.7-94.7-79.1-139
			c9.6-44.3,46.1-77.9,122.2-111.4c76.7-34.2,128.8-37.7,161.2-32.4c35.4,6,48.5,29.4,42.5,57.5c-6,25.2-31.8,37.7-38.9,38.3
			c-7.2,1.2-10.8-6.6-3.6-9.6C386.3,125.4,403.1,116.4,407.3,97.2z M220.9,374.6c-5.4,2.4-9.6,4.8-13.8,7.2
			C133.4,422,97.5,451.9,91.5,484.3c-4.8,27.6,20.4,54.5,69.5,58.1c59.9,3.6,107.9-24.6,113.8-58.1
			C279.6,454.3,268.8,426.8,220.9,374.6z"
          />
          <path
            className="st0"
            d="M698.4,296.1c3-1.8,15.6-1.2,5.4,5.4c-39.5,25.8-166.6,83.3-206.1,83.3c-29.4,0-37.7-17.4-37.7-30
			s2.4-18.6,1.2-19.8c-1.8-1.8-5.4-1.2-24.6,9c-17.4,10.2-36.5,18-42.5,18c-8.4,0-14.4-5.4-14.4-9c0-11.4,7.2-27,30-43.7
			c19.2-15,31.2-18,41.3-18c13.8,0,22.2,21.6,16.2,21.6s-7.8-12-14.4-12c-6,0-18,4.8-34.8,16.2c-15.6,10.2-27.6,27.6-27.6,32.4
			c0,1.2,0.6,1.8,2.4,1.8c5.4,0,15.6-4.2,32.4-12.6c22.8-10.8,37.7-19.2,44.9-19.2c2.4,0,7.8,1.2,7.8,5.4c0,4.8-6,15.6-6,29.4
			c0,10.2,10.8,18,26.4,18C540.3,372.2,661.9,315.9,698.4,296.1z"
          />
          <path
            className="st0"
            d="M712.8,300.3c-1.2,11.4-8.4,32.4-10.2,37.1c-0.6,1.2,0,2.4,1.8,2.4s19.2-8.4,31.2-14.4
			c17.4-9,29.4-15.6,38.9-15.6c8.4,0,16.2,7.2,16.2,19.2c-1.8,16.8-1.8,25.8,4.2,26.4c44.3,9.6,121.6-181.5,154.6-279.8
			c1.8-5.4,9-4.2,6,2.4c-23.4,66.5-51.5,157-86.3,217.5c-26.4,45.5-56.9,76.1-81.5,71.3c-12.6-2.4-15-13.8-13.2-30.6
			c0-9,0-12.6-2.4-13.8c-3-1.8-9.6,0.6-21,6.6c-9.6,4.8-42.5,21.6-47.9,21.6c-3.6,0-14.4-4.2-14.4-9c0-3,7.8-23.4,10.8-42.5
			c1.8-4.8,5.4-4.8,9-5.4C711.6,293.7,713.4,294.9,712.8,300.3z"
          />
          <path
            className="st0"
            d="M888.4,457.9c1.2-36.5,10.2-162.4,28.2-258.8c4.2-22.2,8.4-41.9,12.6-59.9c-116.8,0-127.6,0.6-130-8.4
			c-1.2-5.4,15.6-12.6,20.4-9.6c6,3.6,10.2,5.4,27.6,5.4l85.1,0.6c19.2-76.7,37.1-107.9,45.5-107.9c4.8,0,8.4,14.4,7.2,19.8
			c-1.8,7.2-4.2-3-10.8,11.4c-1.2,1.8-13.8,34.8-25.2,76.7c21,0,28.8,1.8,88.1,1.8c55.1,0,69.5-3,71.3,3.6
			c1.2,7.2-28.2,6.6-73.1,6.6h-89.9c-5.4,21.6-10.8,44.3-14.4,66.5c-5.4,29.4-14.4,81.5-22.2,144.4c-4.8,34.2-10.8,119.2-7.2,148
			c3,22.8,7.8,25.2-0.6,26.4C893.2,526.2,887.8,502.2,888.4,457.9z"
          />
          <path
            className="st0"
            d="M1291,296.1c3-1.8,15.6-1.2,5.4,5.4c-39.5,25.8-166.6,83.3-206.1,83.3c-29.4,0-37.7-17.4-37.7-30
			s2.4-18.6,1.2-19.8c-1.8-1.8-5.4-1.2-24.6,9c-17.4,10.2-36.5,18-42.5,18c-8.4,0-14.4-5.4-14.4-9c0-11.4,7.2-27,30-43.7
			c19.2-15,31.2-18,41.3-18c13.8,0,22.2,21.6,16.2,21.6s-7.8-12-14.4-12c-6,0-18,4.8-34.8,16.2C995,327.3,983,344.7,983,349.5
			c0,1.2,0.6,1.8,2.4,1.8c5.4,0,15.6-4.2,32.4-12.6c22.8-10.8,37.7-19.2,44.9-19.2c2.4,0,7.8,1.2,7.8,5.4c0,4.8-6,15.6-6,29.4
			c0,10.2,10.8,18,26.4,18C1132.8,372.2,1254.5,315.9,1291,296.1z"
          />
          <path
            className="st0"
            d="M1300.6,293.7c3.6,0,5.4,1.2,4.8,6.6c-1.2,11.4-9,32.4-10.2,37.1c-0.6,1.2,0,2.4,1.8,2.4s19.2-8.4,31.2-14.4
			c17.4-9,29.4-15.6,38.3-15.6s16.2,7.2,16.2,19.2c-1.2,16.8-0.6,27,4.8,27.6c10.8,2.4,49.7-9.6,79.7-22.2l92.3-38.3
			c5.4-2.4,8.4,6,1.8,9c-24.6,12.6-58.7,26.4-90.5,40.1c-31.2,13.2-71.9,26.4-89.9,22.8c-12.6-2.4-15.6-15-14.4-31.8
			c0.6-9,0-12.6-1.8-13.8c-3-1.8-9.6,0.6-21,6.6c-9.6,4.8-42.5,21.6-47.9,21.6c-3.6,0-14.4-4.2-14.4-9c0-3,7.8-23.4,10.8-42.5
			C1293.4,294.3,1297.6,294.3,1300.6,293.7z"
          />
          <path
            className="st0"
            d="M1622.9,318.3c-4.2,4.8-10.8,12.6-22.2,24.6c-20.4,21.6-54.5,47.9-65.3,47.9c-8.4,0-13.2-4.8-12-20.4
			c1.2-13.8,8.4-31.2,13.8-42.5c7.2-16.2,18.6-32.4,24.6-33.6c6-0.6,7.2,4.8,7.2,6.6c0,4.8-14.4,16.8-22.8,33
			c-6.6,13.2-10.8,26.4-12,31.2c-1.8,9.6,0.6,13.8,3.6,13.8c9.6,0,43.1-28.2,55.7-41.9c22.8-24.6,37.1-43.1,45.5-41.3
			c7.2,1.8,4.2,6-4.2,24c-7.2,15.6-17.4,40.7-22.8,61.1c-5.4,21.6,0.6,28.2,7.8,28.2c43.7,0,158.8-85.7,213.3-115
			c3-1.2,15-0.6,5.4,6c-53.9,34.8-171.4,121-219.9,121c-18,0-24.6-13.2-18-41.3C1605,360.2,1614.6,334.5,1622.9,318.3z"
          />
        </g>
      </g>
    </Svg>
  </Link>
)

export default Logo
