const buildCyan = "rgb(27,255,242)";
const buildDark = "#000";
const buildLight = "#FFF";

export const Container = {};
export const FormContainer = {
    background: buildDark
};
export const FormSection = {
    background: buildDark,
    color: buildLight
};
export const FormField = {};
export const SectionHeader = {
    color: buildLight
};
export const SectionBody = {};
export const SectionFooter = {};
export const SectionFooterPrimaryContent = {};
export const SectionFooterSecondaryContent = {};
export const Input = {};
export const Button = {
    backgroundColor: buildCyan,
    color: buildDark
};
export const PhotoPickerButton = {
    backgroundColor: buildCyan,
    color: buildDark
};
export const PhotoPlaceholder = {
    backgroundColor: buildLight
};
export const SignInButton = {};
export const SignInButtonIcon = {};
export const SignInButtonContent = {};
export const Strike = {};
export const StrikeContent = {};
export const ActionRow = {};
export const FormRow = {
    color: buildLight
};
export const A = {};
export const Hint = {};
export const Radio = {};
export const Label = {
    color: buildLight
};
export const InputLabel = {
    color: buildLight
};
export const AmazonSignInButton = {};
export const FacebookSignInButton = {};
export const GoogleSignInButton = {};
export const OAuthSignInButton = {};
export const Toast = {};
export const NavBar = {};
export const NavRight = {};
export const Nav = {};
export const NavItem = {};
export const NavButton = {};

const AmplifyTheme = {
	container: Container,
	formContainer: FormContainer,
	formSection: FormSection,
	formField: FormField,

	sectionHeader: SectionHeader,
	sectionBody: SectionBody,
	sectionFooter: SectionFooter,
	sectionFooterPrimaryContent: SectionFooterPrimaryContent,
	sectionFooterSecondaryContent: SectionFooterSecondaryContent,

	input: Input,
	button: Button,
	photoPickerButton: PhotoPickerButton,
	photoPlaceholder: PhotoPlaceholder,
	signInButton: SignInButton,
	signInButtonIcon: SignInButtonIcon,
	signInButtonContent: SignInButtonContent,
	amazonSignInButton: AmazonSignInButton,
	facebookSignInButton: FacebookSignInButton,
	googleSignInButton: GoogleSignInButton,
	oAuthSignInButton: OAuthSignInButton,

	formRow: FormRow,
	strike: Strike,
	strikeContent: StrikeContent,
	actionRow: ActionRow,
	a: A,

	hint: Hint,
	radio: Radio,
	label: Label,
	inputLabel: InputLabel,
	toast: Toast,

	navBar: NavBar,
	nav: Nav,
	navRight: NavRight,
	navItem: NavItem,
	navButton: NavButton,
};

export default AmplifyTheme;