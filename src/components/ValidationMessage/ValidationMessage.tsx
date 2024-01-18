const ValidationMessage = ({ text }: { text: string }) => {
  return <div className="text-red-500 text-sm ml-6 mb-6">{text}</div>
}

export default ValidationMessage
