import HospitalForm from "../components/HospitalForm"

function EditHospitalPage() {

    function handleFormSubmit(data: any) {
        console.log(data)
    }
    return (
        <div className="p-4 lg:p-6 w-full h-full">
            <div className="max-w-[720px]">
                <HospitalForm
                    mode="edit"
                    handleFormSubmit={handleFormSubmit}
                />
            </div>
        </div>
    )
}

export default EditHospitalPage