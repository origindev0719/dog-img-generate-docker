import { DogLogo } from "../../lib/icons"
import { DISPLAY, HEADER } from "../../lib/styles"
const Header = () => {
  return (
    <div className={`${DISPLAY.between} ${HEADER.container}`}>
      <a className="w-[12rem]" href={window.location.href} rel="">
        <DogLogo />
      </a>
    </div>
  )
}

export default Header
