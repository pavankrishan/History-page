import './index.css'

const HistoryItem = props => {
  const {itemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button
          className="delBtn"
          onClick={onDelete}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            className="delImg"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
