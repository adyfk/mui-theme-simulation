export const themeOptionsType: string = `
export type DynamicRecord = Record<string, any>;

export type Direction = "ltr" | "rtl";

// Spacing ======================
export declare type SpacingOptions =
  | number
  | Spacing
  | ((abs: number) => number | string)
  | ((abs: number | string) => number | string)
  | ReadonlyArray<string | number>;
export declare type SpacingArgument = number | string;

export interface Spacing extends DynamicRecord {
  (): string;
  (value: number): string;
  (topBottom: SpacingArgument, rightLeft: SpacingArgument): string;
  (top: SpacingArgument, rightLeft: SpacingArgument, bottom: SpacingArgument): string;
  (top: SpacingArgument, right: SpacingArgument, bottom: SpacingArgument, left: SpacingArgument): string;
}

// Palette ======================
export interface CommonColors extends DynamicRecord {
  black: string;
  white: string;
}

export interface TypeText extends DynamicRecord {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface TypeAction extends DynamicRecord {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledOpacity: number;
  disabledBackground: string;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface TypeBackground extends DynamicRecord {
  default: string;
  paper: string;
}

export interface PaletteOptions extends DynamicRecord {
  primary?: unknown;
  secondary?: unknown;
  error?: unknown;
  warning?: unknown;
  info?: unknown;
  success?: unknown;
  mode?: unknown;
  tonalOffset?: unknown;
  contrastThreshold?: number;
  common?: Partial<CommonColors>;
  grey?: unknown;
  text?: Partial<TypeText>;
  divider?: string;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
  getContrastText?: (background: string) => string;
}


// Component
interface Component extends DynamicRecord {
  MuiAlert?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAlertTitle?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAppBar?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAutocomplete?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAvatar?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAvatarGroup?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiBackdrop?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiBadge?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiBottomNavigation?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiBottomNavigationAction?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiBreadcrumbs?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiButton?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiButtonBase?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiButtonGroup?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCard?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCardActionArea?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCardActions?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCardContent?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCardHeader?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCardMedia?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCheckbox?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiChip?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCircularProgress?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCollapse?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiContainer?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiCssBaseline?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiDialog?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiDialogActions?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiDialogContent?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiDialogContentText?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiDialogTitle?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiDivider?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiDrawer?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAccordion?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAccordionActions?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAccordionDetails?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiAccordionSummary?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiFab?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiFilledInput?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiFormControl?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiFormControlLabel?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiFormGroup?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiFormHelperText?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiFormLabel?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiGrid?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiImageList?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiImageListItem?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiImageListItemBar?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiIcon?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiIconButton?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiInput?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiInputAdornment?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiInputBase?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiInputLabel?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiLinearProgress?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiLink?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiList?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiListItem?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiListItemButton?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiListItemAvatar?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiListItemIcon?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiListItemSecondaryAction?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiListItemText?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiListSubheader?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiMenu?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiMenuItem?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiMobileStepper?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiModal?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiNativeSelect?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiOutlinedInput?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiPagination?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiPaginationItem?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiPaper?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiPopover?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiRadio?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiRating?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiScopedCssBaseline?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSelect?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSkeleton?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSlider?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSnackbar?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSnackbarContent?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSpeedDial?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSpeedDialAction?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSpeedDialIcon?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStack?: {
    defaultProps?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStep?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStepButton?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStepConnector?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStepContent?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStepIcon?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStepLabel?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiStepper?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSvgIcon?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiSwitch?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTab?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTable?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTableBody?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTableCell?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTableContainer?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTableFooter?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTableHead?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTablePagination?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTableRow?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTableSortLabel?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTabs?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTextField?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiToggleButton?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiToggleButtonGroup?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiToolbar?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTooltip?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTouchRipple?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiTypography?: {
    defaultProps?: DynamicRecord;
    styleOverrides?: DynamicRecord;
    variants?: DynamicRecord;
  };
  MuiUseMediaQuery?: {
    defaultProps?: DynamicRecord;
  };
}

export interface ThemeOptions extends DynamicRecord {
  shape?: unknown;
  breakpoints?: unknown;
  direction?: Direction;
  mixins?: unknown;
  palette?: PaletteOptions;
  shadows?: unknown;
  spacing?: SpacingOptions;
  transitions?: unknown;
  components?: Component;
  typography?: unknown;
  zIndex?: Record<string, number>;
}
`;
