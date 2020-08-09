import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F7'
    },

    teacherList: {
        marginTop: -40
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#D4C2FF',
        fontFamily: 'Poppins_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%'
    },

    input: {
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16
    },

    pickerContainer: {
        height: 54,
        marginBottom: 16,
        backgroundColor: '#F8F8FC',
        borderRadius: 8,
        overflow: 'hidden'
    },

    picker: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 14,
        color: '#6A6180'
    },

    pickerItem: {
        color: '#6A6180'
    },

    submitButton: {
        backgroundColor: '#04D361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    submitButtonText: {
        color: '#FFF',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16
    }
})

export default styles;