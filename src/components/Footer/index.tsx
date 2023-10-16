import { TITLE_LISTS } from "../../lib/constants"
import { FOOTER } from "../../lib/styles"
export const Footer = () => {
  return (
    <div className={FOOTER.container}>
      <span className={FOOTER.title}>{TITLE_LISTS.footer}</span>
    </div>
  )
}
