const getStatus = statusCode => {
  if(statusCode === 'A') return 'Approved'
  if(statusCode === 'C') return 'Cancelled'
  return 'Pending Approval'
}

const getBadgeStyle = statusCode => {
  if(statusCode === 'A') return 'success'
  if(statusCode === 'C') return 'danger'
  return 'warning'
}

export { getStatus, getBadgeStyle }