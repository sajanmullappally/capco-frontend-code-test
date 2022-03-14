import { transStatus, transStatusBg, transStatusText } from "../constants"

const getStatus = statusCode => {
  if(statusCode === transStatus.APPROVED) return transStatusText.APPROVED
  if(statusCode === transStatus.CANCELLED) return transStatusText.CANCELLED
  return transStatusText.PENDING
}

const getBadgeStyle = statusCode => {
  if(statusCode === transStatus.APPROVED) return transStatusBg.APPROVED
  if(statusCode === transStatus.CANCELLED) return transStatusBg.CANCELLED
  return transStatusBg.PENDING
}

export { getStatus, getBadgeStyle }