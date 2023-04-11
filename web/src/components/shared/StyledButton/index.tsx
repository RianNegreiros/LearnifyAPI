import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './styles.module.css'

interface StyledButtonProps {
  icon?: IconProp,
  action?: String,
  type_button: string
}

export default function StyledButton({ icon, action, type_button }: StyledButtonProps) {
  return (
    <Button className={(type_button == "red") ? styles.red_button : styles.blue_button}>
        { icon && <FontAwesomeIcon icon={icon} className={action && "mr-2"} /> } {action}
    </Button>
  )
}