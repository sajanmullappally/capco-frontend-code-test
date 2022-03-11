const getStatus = statusCode => {
  if(statusCode === 'A') return 'Approved'
  if(statusCode === 'C') return 'Cancelled'
  return 'Pending Approval'
}

export { getStatus }