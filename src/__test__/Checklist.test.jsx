import React from 'react'
import {screen, render, fireEvent} from '@testing-library/react'
import Checklist from '../components/Checklist'

test('renderiza o input', () => {
    render(<Checklist />)
    const input = screen.getByPlaceholderText('Digite a tarefa')

    expect(input).toBeInTheDocument()
})

test('renderiza o botão', () => {
    render(<Checklist />)
    const btn = screen.getByText('Adicionar')

    expect(btn).toBeInTheDocument()
})

test('adicionar uma tarefa', () => {
    render(<Checklist />)
    const select = screen.getByDisplayValue('Matemática')
    const input = screen.getByPlaceholderText('Digite a tarefa')
    const select2 = screen.getByDisplayValue('Alta Relevância ENEM')
    const botao = screen.getByText('Adicionar')

    fireEvent.change(select, {target: {value: 'Química'}})
    fireEvent.change(input, { target: {value: 'Organica'}})
    fireEvent.change(select2, {target: {value: 'Média Relevância ENEM'}})
    fireEvent.click(botao)

    expect(screen.getByText('Química - Organica - Média Relevância ENEM')).toBeInTheDocument()
})

test('remover uma tarefa', () => {
    render(<Checklist />)
    const select = screen.getByDisplayValue('Matemática')
    const input = screen.getByPlaceholderText('Digite a tarefa')
    const select2 = screen.getByDisplayValue('Alta Relevância ENEM')
    const botao = screen.getByText('Adicionar')

    fireEvent.change(select, {target: {value: 'Química'}})
    fireEvent.change(input, { target: {value: 'Organica'}})
    fireEvent.change(select2, {target: {value: 'Média Relevância ENEM'}})
    fireEvent.click(botao)

    expect(screen.getByText('Química - Organica - Média Relevância ENEM')).toBeInTheDocument()

    const tarefa = screen.getByText('Química - Organica - Média Relevância ENEM')
    expect(tarefa).toBeInTheDocument()

    const btnremover = screen.getByText('Remover')
    fireEvent.click(btnremover)

    expect(tarefa).not.toBeInTheDocument()
})

test('renderiza o titulo', () => {
    render(<Checklist />)

    const titulo = screen.getByText('Checklist de Estudos')

    expect(titulo).toBeInTheDocument()
})

test('renderiza os selects', () => {
    render(<Checklist />)
    const select = screen.getByDisplayValue('Matemática')
    const select2 = screen.getByDisplayValue('Alta Relevância ENEM')

    expect(select).toBeInTheDocument()
    expect(select2).toBeInTheDocument()
})

test('adiciona um conteudo de fisica', () => {
    render(<Checklist />)
    const select = screen.getByDisplayValue('Matemática')
    const input = screen.getByPlaceholderText('Digite a tarefa')
    const select2 = screen.getByDisplayValue('Alta Relevância ENEM')
    const botao = screen.getByText('Adicionar')

    fireEvent.change(select, {target: {value: 'Física'}})
    fireEvent.change(input, { target: {value: 'Eletrodinâmica'}})
    fireEvent.change(select2, {target: {value: 'Alta Relevância ENEM'}})
    fireEvent.click(botao)

    expect(screen.getByText('Física - Eletrodinâmica - Alta Relevância ENEM')).toBeInTheDocument()
})

test('remover um conteudo de fisica', () => {
    render(<Checklist />)
    const select = screen.getByDisplayValue('Matemática')
    const input = screen.getByPlaceholderText('Digite a tarefa')
    const select2 = screen.getByDisplayValue('Alta Relevância ENEM')
    const botao = screen.getByText('Adicionar')

    fireEvent.change(select, {target: {value: 'Física'}})
    fireEvent.change(input, { target: {value: 'Eletrodinâmica'}})
    fireEvent.change(select2, {target: {value: 'Alta Relevância ENEM'}})
    fireEvent.click(botao)

    expect(screen.getByText('Física - Eletrodinâmica - Alta Relevância ENEM')).toBeInTheDocument()

    const tarefa = screen.getByText('Física - Eletrodinâmica - Alta Relevância ENEM')
    expect(tarefa).toBeInTheDocument()

    const btnremover = screen.getByText('Remover')
    fireEvent.click(btnremover)

    expect(tarefa).not.toBeInTheDocument()
})

test('adiciona um conteudo de biologia', () => {
    render(<Checklist />)
    const select = screen.getByDisplayValue('Matemática')
    const input = screen.getByPlaceholderText('Digite a tarefa')
    const select2 = screen.getByDisplayValue('Alta Relevância ENEM')
    const botao = screen.getByText('Adicionar')

    fireEvent.change(select, {target: {value: 'Biologia'}})
    fireEvent.change(input, { target: {value: 'Ecologia'}})
    fireEvent.change(select2, {target: {value: 'Alta Relevância ENEM'}})
    fireEvent.click(botao)

    expect(screen.getByText('Biologia - Ecologia - Alta Relevância ENEM')).toBeInTheDocument()
})

test('remover um conteudo de biologia', () => {
    render(<Checklist />)
    const select = screen.getByDisplayValue('Matemática')
    const input = screen.getByPlaceholderText('Digite a tarefa')
    const select2 = screen.getByDisplayValue('Alta Relevância ENEM')
    const botao = screen.getByText('Adicionar')

    fireEvent.change(select, {target: {value: 'Biologia'}})
    fireEvent.change(input, { target: {value: 'Ecologia'}})
    fireEvent.change(select2, {target: {value: 'Alta Relevância ENEM'}})
    fireEvent.click(botao)

    expect(screen.getByText('Biologia - Ecologia - Alta Relevância ENEM')).toBeInTheDocument()

    const tarefa = screen.getByText('Biologia - Ecologia - Alta Relevância ENEM')
    expect(tarefa).toBeInTheDocument()

    const btnremover = screen.getByText('Remover')
    fireEvent.click(btnremover)

    expect(tarefa).not.toBeInTheDocument()
})