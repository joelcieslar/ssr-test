export interface TestProps {}

export default function Test({}: TestProps) {
  return (
    <button
      type="button"
      onClick={() => {
        alert('hello!')
        console.log('hello!')
      }}
    >
      Say hello
    </button>
  )
}
