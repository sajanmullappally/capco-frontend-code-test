const transactionFilters = [
  { value: '', label: 'All' },
  { value: 'A', label: 'Approved' },
  { value: 'C', label: 'Cancelled' },
  { value: 'P', label: 'Pending Approval' }
]

const transStatus = {
  APPROVED: 'A',
  CANCELLED: 'C',
  PENDING: 'P'
}

const transStatusText = {
  APPROVED: 'Approved',
  CANCELLED: 'Cancelled',
  PENDING: 'Pending Approval'
}

const transStatusBg = {
  APPROVED: 'success',
  CANCELLED: 'danger',
  PENDING: 'warning'
}

const tableHeaders = ["#", "Amount", "Currency", "Type", "Date", "From", "To", "Status"]

export { transactionFilters, transStatus, transStatusText, transStatusBg, tableHeaders }