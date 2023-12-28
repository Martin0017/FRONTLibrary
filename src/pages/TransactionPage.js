import Banner from "@/components/Banner";
import DataPreVisual from "@/components/DataPreVisual";
import '../app/globals.css'

export default function TransactionPage() {
    return (
        <div className="TransactionPage">
        <Banner className="TransactionPageBanner"/>
        <DataPreVisual className="TransactionPageDataPrevisual"/>
        </div>
    )
}
