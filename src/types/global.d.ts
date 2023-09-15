declare global {
    type DataString = 'dashboard' | 'transactions' | 'schedules' | 'users' | 'settings';

    type DataKeys = {
        [key in DataString]: (props: TablerIconsProps) => JSX.Element;
    };

    type AnalyticsData = {
        name: string,
        value: string,
        tag: string,
        icon: (props: TablerIconsProps) => JSX.Element,
        color: string
    }


    interface IFormArgs<T> {
        initialValues: T;
        validate: {
            [K in keyof T]: (value: T[K]) => string | null
        }
    };

    interface IStateValues<T> {
        [key: string]: {
            value: T[keyof T];
            error: string | null;
        }
    };

    interface IDispatchArgs<T> {
        field: keyof T;
        value: T[keyof T] | null;
        error: string | null;
        type: "UPDATE" | "VALIDATE";
    };

    type IUseFormReturnType<T> = {
        getValues: () => T,
        getInputProps: (field: keyof T) => {
            value: T[keyof T],
            error: string | null,
            onChange: (e: React.ChangeEvent<unknown> | DateValue | undefined) => void
        },
        validateField: (field: keyof T) => void,
        validateAll: () => void,
        isValid: () => boolean,
        resetField: (field: keyof T) => void,
        resetAll: () => void
    }

    type ProfileFormValues = {
        name: string,
        email: string,
        phone: string,
        instagram: string,
        youtube: string,
    };

    interface IActivities {
        title: string,
        subtitles: string,
        guest: number[],
        user: number[]
    };

    interface IProducts {
        title: string,
        subtitles: string,
        labels: string[],
        data: number[]
    };
}

export { };