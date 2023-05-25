import cn from 'classnames'
import features from '../../data/features'
import useAnim from '../../helpers/useAnim'
import styles from './ServiceFeatures.module.scss'

import RectSquare from '../../icons/features/rect-square.svg'
import BoxSquare from '../../icons/features/box-square.svg'
import BoxSquareAlt from '../../icons/features/box-square-alt.svg'
import DoubleSquare from '../../icons/features/double-square.svg'
import DoubleSquareAlt from '../../icons/features/double-square-alt.svg'
import TripleSquare from '../../icons/features/triple-square.svg'
import FourSquare from '../../icons/features/four-square.svg'
import Pyramide from '../../icons/features/pyramide.svg'
import Diagram from '../../icons/features/diagram.svg'
import DiagramAlt from '../../icons/features/diagram-alt.svg'
import List from '../../icons/features/list.svg'
import Column from '../../icons/features/column.svg'
import Grid from '../../icons/features/grid.svg'
import Blocks from '../../icons/features/blocks.svg'
import DoubleRect from '../../icons/features/double-rect.svg'
import TripleRect from '../../icons/features/triple-rect.svg'
import SquaresInner from '../../icons/features/squares-inner.svg'
import SquaresMiddle from '../../icons/features/squares-middle.svg'
import SquaresBottom from '../../icons/features/squares-bottom.svg'

export default function ServiceFeatures({ id, type }) {
  const { heading, items } = features[type]

  const { anim, animRef } = useAnim()

  return (
    <section className={cn(styles.el, { [styles.anim]: anim })} id='features' ref={animRef}>
      <h2 className={cn('h2', styles.heading)}>{heading}</h2>
      <div className={styles.items}>
        {items.map(item => (
          <div key={item.id} className={styles.item}>
            <p className={styles.itemTitle}>{item.title}</p>
            {item.icon === 'rect-square' && <RectSquare className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'box-square' && <BoxSquare className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'box-square-alt' && <BoxSquareAlt className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'double-square' && <DoubleSquare className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'double-square-alt' && <DoubleSquareAlt className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'triple-square' && <TripleSquare className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'four-square' && <FourSquare className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'pyramide' && <Pyramide className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'diagram' && <Diagram className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'diagram-alt' && <DiagramAlt className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'list' && <List className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'column' && <Column className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'grid' && <Grid className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'blocks' && <Blocks className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'double-rect' && <DoubleRect className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'triple-rect' && <TripleRect className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'squares-inner' && <SquaresInner className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'squares-middle' && <SquaresMiddle className={cn(styles.icon, styles[item.icon])} />}
            {item.icon === 'squares-bottom' && <SquaresBottom className={cn(styles.icon, styles[item.icon])} />}
          </div>
        ))}
      </div>
    </section>
  )
}
