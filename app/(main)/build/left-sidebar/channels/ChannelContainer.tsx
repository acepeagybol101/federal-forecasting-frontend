import CommunityGuidelinesDialog from "./community-guidelines-dialog/CommunityGuidelinesDialogContainer";
import GetStartedDialogContainer from "./get-started-dialog/GetStartedDialogContainer";

const Channels = () => {
    return (
        <div>
            <h3 className="border-b border-gray-400 pb-2">Channels</h3>
            <CommunityGuidelinesDialog />
            <GetStartedDialogContainer />

        </div>
    );
};

export default Channels;
