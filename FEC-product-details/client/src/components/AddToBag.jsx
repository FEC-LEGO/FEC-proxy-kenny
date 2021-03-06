import React from 'react';
import PropTypes from 'prop-types';
import styles from '../css/styles.css';

const AddToBag = ({
  limit, quantity, changeHandler, buttonHandler, handleTooltips, limitTooltip, closestTooltip,
}) => {
  const customerLimit = limit;
  return (
    <div className={styles.bag}>

      {quantity > 1 && (
        <button
          type="button"
          className={`${styles.bagAdjust} ${styles.minus}`}
          onClick={() => { buttonHandler('-'); }}
        >
          -
        </button>
      )}
      {quantity <= 1 && (
        <button
          type="button"
          disabled="disabled"
          className={`${styles.bagAdjust} ${styles.minus} ${styles.disabled}`}
        >
          -
        </button>
      )}

      <input
        type="text"
        value={quantity}
        className={styles.bagInput}
        onChange={(e) => { changeHandler(e.target.value); }}
      />

      {quantity < limit && (
        <button
          type="button"
          className={`${styles.bagAdjust} ${styles.plus}`}
          onClick={() => { buttonHandler('+'); }}
        >
          +
        </button>
      )}
      {quantity >= limit && (
        <button
          type="button"
          disabled="disabled"
          className={`${styles.bagAdjust} ${styles.plus} ${styles.disabled}`}
        >
          -
        </button>
      )}

      <div className={styles.customerLimit}>
        {`Limit ${customerLimit}`}
        <button type="button" className={styles.info} onClick={() => { handleTooltips('limit'); }}>i</button>
        {limitTooltip === true && (
          <div>
            <button type="button" className={styles.limitTooltip} aria-label="button" onClick={() => { handleTooltips('limit'); }} />
            <div className={styles.limitTooltipContainer}>
              <button type="button" className={styles.limitX} aria-label="button" onClick={() => { handleTooltips('limit'); }}>
                <svg viewBox="0 0 17 17" width="17px" height="17px">
                  <path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd" />
                </svg>
              </button>
              <div className={styles.limitTooltipHeader}>Limit</div>
              <div className={styles.limitTooltipText}>
                We restrict the limit a household can buy in order to be fair to all of our fans. If
                you’ve already reached that limit through previous orders your order may be
                cancelled.
              </div>
            </div>
          </div>
        )}
        {closestTooltip === true && (
          <div>
            <button type="button" className={styles.closestTooltip} aria-label="button" onClick={() => { handleTooltips('closest'); }} />
            <div className={styles.closestTooltipContainer}>
              <button type="button" className={styles.closestX} aria-label="button" onClick={() => { handleTooltips('closest'); }}>
                <svg viewBox="0 0 17 17" width="17px" height="17px">
                  <path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd" />
                </svg>
              </button>
              <div className={styles.closestTooltipHeader}>Please Note:</div>
              <div className={styles.closestTooltipText}>
                The green check mark indicates that this item is currently available in this
                location. Items sell at varying rates and this is not a guarantee that the item
                will remain in stock for an extended period of time.  If you want to ensure
                availability, visit the store soon or call ahead and speak with a Brick
                Specialist.
              </div>
            </div>
          </div>
        )}
      </div>
      <button type="submit" className={styles.addToBag}>Add to Bag</button>
    </div>
  );
};

AddToBag.propTypes = {
  quantity: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
  buttonHandler: PropTypes.func.isRequired,
  handleTooltips: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
  limitTooltip: PropTypes.bool.isRequired,
  closestTooltip: PropTypes.bool.isRequired,
};

export default AddToBag;
