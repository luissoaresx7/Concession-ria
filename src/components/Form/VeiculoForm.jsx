import './Form.css';

export default function VeiculoForm({data, updateFieldHandler}) {
  return (
    <div className='veiculo-container'>
      <div className="form-control">
        <label htmlFor="marca">Marca:</label>
        <input 
        type="text" 
        name='text'
        id='marca'
        placeholder='Digite a marca do veículo'
        required
        value={data.marca || ''}
        onChange={(e) => updateFieldHandler('marca', e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="modelo">Modelo:</label>
        <input 
        type="text" 
        name='text'
        id='modelo'
        placeholder='Digite o modelo do veículo'
        required
        value={data.modelo || ''}
        onChange={(e) => updateFieldHandler('modelo', e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="ano">Ano:</label>
        <input 
        type="text" 
        name='text'
        id='ano'
        placeholder='Digite o ano do veículo'
        required
        value={data.ano || ''}
        onChange={(e) => updateFieldHandler('ano', e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="km">Km:</label>
        <input 
        type="text" 
        name='text'
        id='km'
        placeholder='Digite a quilometragem do veículo'
        required
        value={data.km || ''}
        onChange={(e) => updateFieldHandler('km', e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="cor">Cor:</label>
        <input 
        type="text" 
        name='text'
        id='cor'
        placeholder='Digite a cor do veículo'
        required
        value={data.cor || ''}
        onChange={(e) => updateFieldHandler('cor', e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="foto">Foto:</label>
        <input 
        type="text" 
        name='text'
        id='foto'
        placeholder='Link da foto do veículo'
        required
        value={data.foto || ''}
        onChange={(e) => updateFieldHandler('foto', e.target.value)}
        />
      </div>
    </div>
  )
}