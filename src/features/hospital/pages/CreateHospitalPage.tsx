import HospitalForm from "../components/HospitalForm"

function CreateHospitalPage() {
  return (
    <div className="p-4 lg:p-6 w-full h-full">
      <div className="max-w-[720px]">
        <HospitalForm
          mode="create"
          handleFormSubmit={() => { }}
        />
      </div>
    </div>
  )
}

export default CreateHospitalPage