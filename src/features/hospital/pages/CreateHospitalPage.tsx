import HospitalForm from "../components/HospitalForm"

function CreateHospitalPage() {

  function handleFormSubmit(data:any) {
    console.log(data)
  }


  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <div className="max-w-[720px]">
        <HospitalForm
          mode="create"
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </div>
  )
}

export default CreateHospitalPage