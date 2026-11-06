import HospitalForm from "../components/HospitalForm"

function EditHospitalPage() {
    return (
        <div className="p-4 lg:p-6 w-full h-full">
            <div className="max-w-[720px]">
                <HospitalForm
                    mode="edit"
                    onSubmit={() => { }}
                />
            </div>
        </div>
    )
}

export default EditHospitalPage