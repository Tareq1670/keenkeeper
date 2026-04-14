import ContextProviders from '@/Context/context.provider';

const Providers = ({children}) => {
    return (
        <ContextProviders>
            {children}
        </ContextProviders>
    );
};

export default Providers;