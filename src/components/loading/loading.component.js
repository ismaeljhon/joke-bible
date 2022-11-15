const Loading = ({ isLoading, loadingText = 'Loading Please wait...' }) => {
  return (
    isLoading ? <p>{loadingText}</p> : ''
  )
}

export default Loading